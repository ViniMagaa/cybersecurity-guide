import {
  Anchor,
  BrickWallFire,
  EarthLock,
  HomeIcon,
  LockKeyhole,
  MonitorSmartphone,
  MountainSnow,
  ShieldAlert,
  Waypoints,
} from "lucide-react";

export const routes = [
  { href: "/", icon: HomeIcon, label: "Início" },
  { href: "/firewalls", icon: BrickWallFire, label: "Firewalls" },
  { href: "/vpns", icon: EarthLock, label: "VPNs" },
  { href: "/criptografia", icon: ShieldAlert, label: "Criptografia" },
  { href: "/ddos", icon: MonitorSmartphone, label: "DDoS" },
  { href: "/darkweb", icon: MountainSnow, label: "Dark Web" },
  { href: "/ssltsl", icon: Waypoints, label: "SSL/TSL" },
  { href: "/phishing", icon: Anchor, label: "Phishing" },
  { href: "/ciberseguranca", icon: LockKeyhole, label: "Cibersegurança" },
];
