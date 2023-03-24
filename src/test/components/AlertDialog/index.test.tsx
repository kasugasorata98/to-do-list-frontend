import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertDialog from "@/components/AlertDialog";

describe("AlertDialog component", () => {
  const onClose = jest.fn();
  const onConfirm = jest.fn();
  const onCancel = jest.fn();

  const props = {
    isOpen: true,
    header: "Confirmation",
    description: "Are you sure you want to delete this item?",
    confirm: {
      title: "Delete",
      onClick: onConfirm,
    },
    cancel: {
      title: "Cancel",
      onClick: onCancel,
    },
    onClose,
  };

  it("renders correctly", () => {
    const { asFragment } = render(<AlertDialog {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClose function when close button is clicked", () => {
    const { getByLabelText } = render(<AlertDialog {...props} />);
    const closeBtn = getByLabelText("Close");

    fireEvent.click(closeBtn);

    expect(onClose).toHaveBeenCalled();
  });

  it("calls onCancel function when cancel button is clicked", () => {
    const { getByText } = render(<AlertDialog {...props} />);
    const cancelBtn = getByText("Cancel");

    fireEvent.click(cancelBtn);

    expect(onClose).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });

  it("calls onConfirm function when confirm button is clicked", () => {
    const { getByText } = render(<AlertDialog {...props} />);
    const confirmBtn = getByText("Delete");

    fireEvent.click(confirmBtn);

    expect(onConfirm).toHaveBeenCalled();
  });
});
