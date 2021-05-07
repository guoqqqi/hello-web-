import React from 'react';

type Props = {
  list: ICard[];
};

type ICard = {
  id: string;
  name: string;
  indexNumber: string;
}

export enum BankType {
  '中国工商银行' = 'icbc',
  '中国建设银行' = 'cbc',
  '中国农业银行' = 'abc',
  '中国银行' = 'bc',
  '中国交通银行' = 'ctb'
};

const Mapping: React.FC<Props> = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        <div style={{ backgroundImage: `url(/cardbg_${BankType[item.name] || 'other'}.png)` }} key={item.indexNumber}>
          <div>
            <span>
              {BankType[item.name] && <img src={`/cardicon_${BankType[item.name]}.png`} alt="" />}
            </span>
            {item.name}
          </div>
        </div>
      })}
    </div>
  );
}

export default Mapping;
