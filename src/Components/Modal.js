function Modal() {
    return(
        <div className="modalBackground">
            <div className="modelContainer">
                <button> X </button>
                <div className="title">
                    <h1>Are you sure you want to continue ?</h1>
                </div>
                <div className="body">
                    <p>
                        The next page is awesom! You should move forward, you will enjoy it.
                    </p>
                </div>
                <div className="footer">
                    <button>Cancel</button>
                    <button>continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;