import React, { useEffect, useState } from 'react';
import { PageHeader, Descriptions } from 'antd';
import { history, useParams, useModel } from 'umi';
import moment from 'moment';
import { getWithdrawById } from '@/services/withdraw';
import { getTransferById } from '@/services/transfer';
import { getRechargeById } from '@/services/recharge';
import { messageDecode } from '@/utils/utils';
import { format } from '@/utils/currency';
import { checkCard } from '@/utils/cardCheck';

import styles from './index.less';

const typeConfig = {
  recharge: {
    title: '充值钱包查看',
  },
  withdraw: {
    title: '提现钱包查看',
  },
  transfer: {
    title: '个人转帐钱包查看',
  },
};

const Label: React.FC<{
  title: string;
  icon: string;
}> = ({ icon, title }) => {
  return (
    <div className="cutom-descriptions-label">
      <span className={`${styles.icon} ${icon}`} />
      {title}
    </div>
  );
};

const TransaDetail: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [pageData, setPageData] = useState<any>();
  const key = initialState?.key;

  const params = useParams<{
    type: string;
    id: string;
  }>();

  const { type, id } = params;

  const getPageData = (_type: string, _id: string) => {
    return new Promise((resolve, reject) => {
      if (key) {
        if (_type === 'withdraw') {
          getWithdrawById(_id, key).then((res) => {
            const data = messageDecode(res, key);
            console.log(data, 'page data');
            resolve(data);
            setPageData(data.data);
            console.log(data.data, '提现');
          });
        }
        if (_type === 'transfer') {
          getTransferById(_id, key).then((res) => {
            const data = messageDecode(res, key);
            console.log(data, 'page data');
            resolve(data);
            setPageData(data.data);
            console.log(data.data, '转账');
          });
        }
        if (_type === 'recharge') {
          getRechargeById(_id, key).then((res) => {
            const data = messageDecode(res, key);
            console.log(data, 'page data');
            resolve(data);
            setPageData(data.data);
            console.log(data.data, '充值');
          });
        }
      }
      reject();
    });
  };

  useEffect(() => {
    getPageData(type, id);
  }, []);

  if (!key) {
    return <div></div>;
  }

  if (!pageData) {
    return <div></div>;
  }

  return (
    <div className={styles.bg_mask}>
      <div className={styles.main}>
        <PageHeader title={typeConfig[type].title} onBack={() => history.goBack()} />
        <div className={styles.content}>
          {type === 'recharge' && (
            <Descriptions>
              <Descriptions.Item label={<Label icon="classify" title="交易类型" />}>
                充值
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="money" title="交易金额" />}>
                {`¥ ${format(pageData.amount)}`}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="list" title="交易编号" />}>
                {pageData.id}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="time" title="操作时间" />}>
                {moment(pageData.created * 1000).locale('zh').format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="remark" title="备注" />}>
                {pageData.description}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="account" title="操作银行账号" />}>
                {}
              </Descriptions.Item>
            </Descriptions>
          )}
          {type === 'withdraw' && (
            <Descriptions>
              <Descriptions.Item label={<Label icon="classify" title="交易类型" />}>
                提现
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="money" title="交易金额" />}>
                {`¥ ${format(pageData.withdraw_amount)}`}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="list" title="交易编号" />}>
                {pageData.id}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="time" title="操作时间" />}>
                {moment(pageData.created * 1000).locale('zh').format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="remark" title="备注" />}>
                {pageData.description}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="account" title="收款账号" />}>
                {checkCard(pageData.extra.bank_acct_no)
                  ? `${
                      (checkCard(pageData.extra.bank_acct_no) as any).bankName
                    }(${pageData.extra.bank_acct_no.slice(-4)})`
                  : pageData.extra.bank_acct_no}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="money" title="手续费" />}>
                <div>
                  {`${format(pageData.fee)} 元`}
                  <div className={styles.feeTip}>手续费 = 提现金额 * 0.10%</div>
                </div>
              </Descriptions.Item>
            </Descriptions>
          )}
          {type === 'transfer' && (
            <Descriptions>
              <Descriptions.Item label={<Label icon="classify" title="交易类型" />}>
                转账
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="userCard" title="转帐对象" />}>
                个人转账
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="user" title="姓名" />}>
                {pageData.extra.into_wallet_name}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="phone" title="手机号" />}>
                123456789
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="money" title="交易金额" />}>
                {`¥ ${format(pageData.transfer_amount)}`}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="list" title="交易编号" />}>
                {pageData.id}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="time" title="操作时间" />}>
                {moment(pageData.created * 1000).locale('zh').format('YYYY-MM-DD HH:mm:ss')}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="list2" title="用途" />}>
                充值
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="remark" title="备注" />}>
                {pageData.description}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="swipingCard" title="付款钱包ID" />}>
                {pageData.wallet_id}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="account" title="收款钱包ID" />}>
                {pageData.to_wallet}
              </Descriptions.Item>
              <Descriptions.Item label={<Label icon="percent" title="手续费" />}>
                <div>
                  {`${format(pageData.fee)} 元`}
                  <div className={styles.feeTip}>手续费 = 提现金额 * 0.10%</div>
                </div>
              </Descriptions.Item>
            </Descriptions>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransaDetail;
