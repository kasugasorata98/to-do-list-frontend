import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";

const AlertDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  description?: string;
  confirm: {
    title?: string;
    onClick: () => void;
  };
  cancel: {
    title?: string;
    onClick: () => void;
  };
}> = ({ isOpen, header, description, confirm, cancel, onClose }) => {
  const cancelRef = React.useRef<any>();

  return (
    <ChakraAlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay background={"transparent"} />

      <AlertDialogContent>
        <AlertDialogHeader>{header}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{description}</AlertDialogBody>
        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={() => {
              onClose();
              cancel.onClick();
            }}
          >
            {cancel?.title}
          </Button>
          <Button colorScheme="red" ml={3} onClick={confirm.onClick}>
            {confirm?.title}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
