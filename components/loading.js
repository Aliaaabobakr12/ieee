import Image from "next/image";

export default function Loader({ open }) {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    open && (
      <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center">
        <div className="fixed inset-0 z-[1] bg-white" />
        <span className="z-[2] flex animate-pulse flex-col items-center justify-center text-center text-4xl font-semibold text-gold">
          <Image
            priority={true}
            src="https://edu.ieee.org/eg-ejust/wp-content/uploads/sites/904/2022/07/cropped-cropped-gate-with-uni-1-8.png"
            width={300}
            height={300}
            quality={100}
            alt="logo"
          />
        </span>
      </div>
    )
  );
}
