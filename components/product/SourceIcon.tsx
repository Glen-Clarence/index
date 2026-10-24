import {
  Bookmark,
  BookOpen,
  Layers,
  MapPin,
  Play,
  type LucideIcon,
} from "lucide-react";
import type { Source } from "@/data/topics";

const icons: Record<Source["kind"], LucideIcon> = {
  Bookmark,
  Video: Play,
  Article: BookOpen,
  Place: MapPin,
  Collection: Layers,
};

export function SourceIcon({
  kind,
  size,
}: {
  kind: Source["kind"];
  size: number;
}) {
  const Icon = icons[kind];
  return <Icon size={size} aria-hidden="true" />;
}
