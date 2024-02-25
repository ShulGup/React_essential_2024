import React, { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export const ModelTimer = forwardRef(function Model(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const lostTime = timeRemaining <= 0;

  const formatRemainingTime = (timeRemaining / 1000).toFixed(2);

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  const dialog = React.useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} onClose={onReset}>
      {lostTime && <p>lost time</p>}
      {!lostTime && <p>{score}</p>}
      <p>{formatRemainingTime} second</p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
