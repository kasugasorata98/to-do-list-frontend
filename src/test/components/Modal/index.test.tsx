import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "@/components/Modal";

describe("Modal component", () => {
  it("matches snapshot", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();
    const onCancel = jest.fn();

    const { asFragment } = render(
      <Modal
        isOpen={true}
        onClose={onClose}
        header="Modal header"
        title="Modal title"
        value="Modal value"
        placeholder="Modal placeholder"
        confirm={{ title: "Confirm", onClick: onConfirm }}
        cancel={{ title: "Cancel", onClick: onCancel }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("calls onClose function when cancel button is clicked", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        title="Test Modal"
        value="Initial Value"
        header="Test Header"
        confirm={{ title: "Confirm", onClick: jest.fn() }}
        cancel={{ title: "Cancel", onClick: jest.fn() }}
        placeholder="Test Placeholder"
      />
    );

    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalled();
  });

  it("calls confirm function with updated text value when confirm button is clicked", () => {
    const handleConfirm = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Modal
        isOpen={true}
        onClose={jest.fn()}
        title="Test Modal"
        value="Initial Value"
        header="Test Header"
        confirm={{ title: "Confirm", onClick: handleConfirm }}
        cancel={{ title: "Cancel", onClick: jest.fn() }}
        placeholder="Test Placeholder"
      />
    );

    const confirmButton = getByText("Confirm");
    const input = getByPlaceholderText("Test Placeholder");

    fireEvent.change(input, { target: { value: "New Value" } });
    fireEvent.click(confirmButton);

    expect(handleConfirm).toHaveBeenCalledWith("New Value");
  });
});
