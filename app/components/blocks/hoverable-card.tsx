import { cn } from "~/lib/utils";

export type HoverableCardProps = {
  imgBackground?: "zombie" | "survival" | "documents";
  label: string;
  bgPosition?: bgPositions;
  description: string;
};

type bgPositions =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const bgPositions = {
  center: "bg-center",
  top: "bg-top",
  bottom: "bg-bottom",
  left: "bg-left",
  right: "bg-right",
  "top-left": "bg-left-top",
  "top-right": "bg-right-top",
  "bottom-left": "bg-left-bottom",
  "bottom-right": "bg-right-bottom",
};

export default function HoverableCard({
  imgBackground,
  bgPosition,
  label,
  description,
}: HoverableCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "overflow-hidden relative card h-96 rounded-xl shadow-xl max-w-sm mx-auto flex flex-col justify-end p-4 bg-cover",
          imgBackground === "zombie" && `bg-[url(/zombies.jpg)]`,
          imgBackground === "survival" && `bg-[url(/open-world.jpg)]`,
          imgBackground === "documents" && `bg-[url(/documents.jpg)]`,
          (bgPosition && bgPositions[bgPosition]) || "bg-center"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content relative z-10">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {label}
          </h1>
          <p className="font-normal text-sm text-gray-50 my-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
