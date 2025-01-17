import { Root, Overlay, Content, Close, DialogTitle, Trigger } from "@radix-ui/react-dialog";
import { styled } from "../../stitches.config";
import Flex from "./Flex";
import Card from "./Card";
import centerScreen from "../../styles/centerScreen";
import { contentShow, overlayShow } from "../../animations/DialogShow";

export const DialogContent = styled(Content, Flex, centerScreen, {
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
});

export const DialogCloseButton = styled(Close, {
  position: "absolute",
  top: "$6",
  right: "$6",
});

export const DialogContentTitle = styled(DialogTitle, { margin: 0, mb: "$20" });

export const DialogTrigger = styled(Trigger, Card, Flex, {
  size: "$160",
});

export const DialogOverlay = styled(Overlay, {
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const DialogRoot = Root;
