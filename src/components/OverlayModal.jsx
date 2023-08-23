export default function OverlayModal({ children, ...props }) {

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" {...props}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
            {children}
        </div>
    )
}