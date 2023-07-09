import { utils, Contract, ethers } from "ethers";
import React, { useRef, useState, useContext, useEffect, useMemo } from "react";

import { contractAddress2, abidis } from "../hooks/abiHelpers";
import axios from "axios";

//import Web3Context from "@/context/Web3Context";
export const useContract = () => {

    {/*

 const { accounts, isLoaded, connect } = useContext(Web3Context);
  return useMemo(async () => {
    if (!isLoaded) return null;
    try {
      const provider = await connect();
      const signer = provider.getSigner();
      const contract = new Contract(
        "0x399C21f2Ea7720E1b97E6D258E687Dd74a9607e5",
        abidis,
        signer
      );
      return contract;
    } catch (e) {
      console.log(e);
      return null;
    }
  }, [accounts, isLoaded]);


*/}
 
};

function RankingStake() {
  //const { accounts, isLoaded } = useContext(Web3Context);

  useEffect(() => {
 //  if (!isLoaded) return;
    submit();
    // getBalanceToken()
    // getIsAdmin()
    return () => {};
  }, []);

  const [royaltiesDistribution, setRoyaltiesDistribution] = useState([]);

  const submit = async (e) => {
    try {
      const [stake] = null;
      const getPool = async (i) =>
        (await stake.getAllUsers(i)).map((user) =>
          Object.assign({ poolIndex: i }, user)
        );

      let pool = await getPool(1);
      // pool = pool.concat(await stake.getAllUsers(2));
      pool = pool.concat(await getPool(3));
      // pool = pool.concat(await stake.getAllUsers(4));
      pool = pool.concat(await getPool(5));

      // console.log(pool.length, 'allUser');
      pool = pool
        .filter((user) => {
          return user.user != "0x0000000000000000000000000000000000000000";
        })
        .map((user) => {
          return {
            user: user.user,
            referrer: user.referrer,
            investment: Number(utils.formatEther(user.investment)).toFixed(2),
            stakingValue: utils.formatEther(user.stakingValue),
            rewardLockedUp: utils.formatEther(user.rewardLockedUp),
            totalDeposit: Number(utils.formatEther(user.totalDeposit)).toFixed(
              2
            ),
            totalWithdrawn: utils.formatEther(user.totalWithdrawn),
            nextWithdraw: user.nextWithdraw,
            unlockDate: user.unlockDate,
            depositCheckpoint: utils.formatEther(user.depositCheckpoint),
            busdTotalDeposit: Number(
              utils.formatEther(user.busdTotalDeposit)
            ).toFixed(2),
            address: "0x0000000",
            percentage: 100,
            isdev: false,
            poolIndex: user.poolIndex,
          };
        });

      const ref = await axios.get("https://xb.api.magic-api.net/v1/utils");
      const { data } = ref.data;
      let poolShow = [];

      pool = pool
        .map((user, index) => {
          const ref = data.find(
            (ref) => ref.user.toUpperCase() == user.user.toUpperCase()
          );
          user.refamount = 0;
          if (ref) {
            user.refamount = Number(ethers.utils.formatEther(ref.amount));
          }
          user.investment = Number(user.investment);
          return user;
        })
        .map((user, index) => {
          if (poolShow.find((u) => u.user == user.user)) {
            index = poolShow.findIndex((u) => u.user == user.user);
            poolShow[index].refamount += user.refamount;
            poolShow[index].investment += user.investment;
          } else {
            poolShow.push(user);
          }
        });

      pool = poolShow.sort((a, b) => {
        return b.refamount - a.refamount;
      });

      setRoyaltiesDistribution(pool);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="box-card shadow-b bg-zyberGrey h-screen rounded-lg border border-blue-800 bg-cover   bg-local bg-no-repeat py-4"
    >
      
      <h1 className="tlt relative mt-6 text-center text-4xl uppercase text-white">
        Ranking
      </h1>

      <div className='mx-auto mt-2 space-y-2 px-8'>
        {royaltiesDistribution.map((wallet, index) => {
          let total = 0;
          let percentage = 0;
          if (index == royaltiesDistribution.length - 1) {
            total =
              royaltiesDistribution
                .map((wallet) => Number(wallet.percentage))
                .reduce((a, b) => Number(a) + Number(b), 0) +
              Number(percentage);
            percentage = total / 100;
          }

          return (
            <>
              <div key={index} className='relative card py-4 px-2 shadow-sm '>
                <div className=''>
                  <div className='-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
                    <div className='ml-4 mt-2 flex '>
                      {index < 3 ? (
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 24 24'
                          className={clsx("h-10 w-10", {
                            "text-yellow-500": index === 0,
                            "text-gray-400": index === 1,
                            "text-orange-400": index === 2,
                          })}
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7s3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm-1-8H7v5.518a8.957 8.957 0 0 1 4-1.459V2zm6 0h-4v4.059a8.957 8.957 0 0 1 4 1.459V2z'></path>
                          <path d='m10.019 15.811-.468 2.726L12 17.25l2.449 1.287-.468-2.726 1.982-1.932-2.738-.398L12 11l-1.225 2.481-2.738.398z'></path>
                        </svg>
                      ) : (
                        <h1 className='z-10 mr-3 mt-1.5 text-3xl text-white'>
                          {index + 1}
                        </h1>
                      )}
                      <span className='inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-900'>
                        <svg
                          className='h-full w-full text-gray-100'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                        </svg>
                      </span>
                    </div>
                    <div className='mr-12 mt-2 flex-shrink-0'>
                      <div className='focus:outline-none'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <p className='text-sm font-medium text-gray-100'>
                          Wallet: 0x...{wallet.user?.slice(28)}
                        </p>
                        <p className='truncate text-sm text-gray-200'>
                          Invest: 0
                        </p>
                        <p className='truncate text-sm text-gray-200'>
                          Ref Invest: {wallet.refamount * 20}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RankingStake;
