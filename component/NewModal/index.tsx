import React from 'react';
import { Button, Modal } from 'antd';

import styles from './style.less';

type Props = {
  // 弹窗顶部的标题。
  title?: string;
  // 弹窗中间部分的描述内容。
  desc?: string;
  content?: () => JSX.Element;
  handleOK: () => void;
  // 点击取消按钮时运行的函数，有该方法时会显示取消按钮，不传则没有取消按钮。
  onCancel?: () => void;
  confirmLoading?: boolean;
  // 控制弹窗右上角关闭 svg 是否显示，true 表示显示。
  closable?: boolean;
  // 确定按钮的文案，不传该值时默认显示为“确定”。
  textOK?: string;
  height?: string;
};

const NewModal: React.FC<Props> = ({ title, desc, content, handleOK, onCancel, confirmLoading, closable, textOK, height }) => {
  if (!height) {
    height = "239px";
  }
  return (
    <div className={styles.main}>
      <Modal
        title={title}
        width={'516px'}
        visible={true}
        centered={true}
        onCancel={onCancel}
        footer={null}
        closable={closable}
        bodyStyle={{ padding: "40px 60px", height: '290px' }}
      >
        {desc && <div className={styles.title}>{desc}</div>}
        {content && <div className={styles.content}>{content()}</div>}
        <div className={styles.submit}>
          {onCancel
            ?
            <>
              <Button onClick={handleOK} loading={confirmLoading}>{textOK || "确定"}</Button>
              <Button onClick={onCancel}>取消</Button>
            </>
            :
            <Button style={{ margin: '0 auto' }} onClick={handleOK} loading={confirmLoading}>{textOK || "确定"}</Button>
          }
        </div>
      </Modal>
    </div>
  );
};

export default NewModal;
