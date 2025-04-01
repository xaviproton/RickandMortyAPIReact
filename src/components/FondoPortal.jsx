export default function FondoPortal() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <img
        src="/gifs/portal-fondo.gif"
        alt="Portal multiversal"
        className="w-[700px] opacity-10 object-contain animate-pulse"
      />
    </div>
  )
}
