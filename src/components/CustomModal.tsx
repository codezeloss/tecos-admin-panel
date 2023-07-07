import { Modal } from "antd";

interface Props {
  open: boolean;
  hideModal: () => void;
  performAction: () => void;
  title: string;
}

function CustomModal(props: Props) {
  const { open, hideModal, performAction, title } = props;

  return (
    <>
      <Modal
        title="Confirm"
        open={open}
        onOk={performAction}
        onCancel={hideModal}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>{title}</p>
      </Modal>
    </>
  );
}

export default CustomModal;
