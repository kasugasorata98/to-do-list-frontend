import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  value?: string;
  header?: string;
  confirm: {
    title?: string;
    onClick: (text: string) => void;
  };
  cancel: {
    title?: string;
    onClick: () => void;
  };
  placeholder?: string;
}> = ({
  isOpen,
  header,
  title,
  confirm,
  cancel,
  onClose,
  placeholder,
  value = "",
}) => {
  const initialRef = React.useRef<any>(null);
  const finalRef = React.useRef<any>(null);
  const [text, setText] = useState<string>(value);
  return (
    <ChakraModal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay background="transparent" />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>{title}</FormLabel>
            <Input
              ref={initialRef}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder={placeholder}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              confirm.onClick(text);
            }}
          >
            {confirm.title}
          </Button>
          <Button onClick={onClose}>{cancel.title}</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
