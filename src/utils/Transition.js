import React, { useRef, useEffect, useContext } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef(null);
  const Component = tag;

  return React.createElement(
    ReactCSSTransition,
    {
      appear,
      nodeRef,
      unmountOnExit: removeFromDom,
      in: show,
      addEndListener: (done) => {
        nodeRef.current.addEventListener('transitionend', done, false);
      },
      onEnter: () => {
        if (!removeFromDom) nodeRef.current.style.display = null;
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
      },
      onEntering: () => {
        removeClasses(nodeRef.current, enterStartClasses);
        addClasses(nodeRef.current, enterEndClasses);
      },
      onEntered: () => {
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
      },
      onExit: () => {
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
      },
      onExiting: () => {
        removeClasses(nodeRef.current, leaveStartClasses);
        addClasses(nodeRef.current, leaveEndClasses);
      },
      onExited: () => {
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom) nodeRef.current.style.display = 'none';
      }
    },
    React.createElement(
      Component,
      {
        ref: nodeRef,
        ...rest,
        style: {
          display: !removeFromDom && !show ? 'none' : undefined
        }
      },
      children
    )
  );
}

function Transition({ show, appear, ...rest }) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return React.createElement(CSSTransition, {
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show,
      ...rest
    });
  }

  return React.createElement(
    TransitionContext.Provider,
    {
      value: {
        parent: {
          show,
          isInitialRender,
          appear
        }
      }
    },
    React.createElement(CSSTransition, {
      appear,
      show,
      ...rest
    })
  );
}

export default Transition;