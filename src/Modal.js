// Modal.js
function Modal({ isOpen, winner, onRestart, onClose }) {
  if (!isOpen) return null;

  return (
    <div>
      {/* Modal backdrop that also acts as an overlay */}
      <div className="modal-backdrop show"></div>

      {/* Modal window */}
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 className="modal-title">Game Over</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>
                <span style={{ color: "green" }}>"{winner}"</span> wins! What
                would you like to do next?
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={onRestart}
              >
                Play Again
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
