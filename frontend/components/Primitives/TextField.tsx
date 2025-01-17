import { styled } from "../../stitches.config";

const TextField = styled("input", {
  backgroundColor: "$loContrast",
  color: "$hiContrast",
  "&::placeholder": {
    color: "$slate9",
  },

  variants: {
    size: {
      "1": {
        height: "$5",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        fontSize: "$20",
        p: "$8",
        "&:-webkit-autofill::first-line": {
          fontSize: "$20",
        },
      },
      "3": {
        borderRadius: "$2",
        fontSize: "$18",
        pl: "$12",
        pt: "$20",
        pb: "$8",
        "&:-webkit-autofill::first-line": {
          fontSize: "$18",
        },
      },
    },
    backgroundColor: {
      blueLight: {
        backgroundColor: "$blue4",
      },
    },
    textColor: {
      white: {
        color: "white",
      },
    },
    variant: {
      ghost: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$slateA7",
          },
        },
        "&:focus": {
          backgroundColor: "$loContrast",
          boxShadow: "inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
        "&:read-only": {
          backgroundColor: "transparent",
        },
      },
    },
    state: {
      invalid: {
        borderColor: "$red7",
        boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow: "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow: "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export default TextField;
