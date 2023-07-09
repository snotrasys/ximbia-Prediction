import { utils, Contract, ethers } from "ethers";
import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import clsx from "clsx";

import { contractAddress2, abidis } from "../hooks/abiHelpers";
import axios from "axios";
import { useToken } from "../hooks/UseToken";
import { useConnect,useNetwork } from 'wagmi';

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
  const [Token]=useToken();
  
  
  useEffect(() => {
 //  if (!isLoaded) return;
    submit();
    // getBalanceToken()
    // getIsAdmin()
    return () => {};
  }, [Token.contract]);

  const [royaltiesDistribution, setRoyaltiesDistribution] = useState([]);

  const submit = async (e) => {
    try {
      // console.log("submit");
      // const provider =new ethers.providers.Web3Provider(window.ethereum);



      const allUser = await Token.getAllUser();
      if(allUser.length==0) return;

      const allUser2 = allUser.map((user) => {
        return {
          address: user.user,
          id:user.id,
          totalBull: user.totalBull.toString(),
          totalBear: user.totalBear.toString(),
          totalBetAmount: Number(ethers.utils.formatEther(user.totalBetAmount)).toFixed(4),
          totalReWards:   Number(ethers.utils.formatEther(user.totalReWards)).toFixed(4),
          totalRefound:   Number(ethers.utils.formatEther(user.totalRefound)).toFixed(4),
        };
      });

      console.log(allUser2);
      console.log(allUser2.length);
      setRoyaltiesDistribution(allUser2)
      // address user;
      // uint id;
      // uint totalBull;
      // uint totalBear;
      // uint totalBetAmount;
      // uint totalReWards;
      // uint totalRefound;
      

      // const response = await axios.get(
      //   "https://api.zybertrust.com/api/v1/royaltiesDistribution"
      // );
      // console.log(response.data);
      // setRoyaltiesDistribution(response.data);

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
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
        onClick={()=>submit()}
        >
          Hola
        </button>
        {royaltiesDistribution.map((wallet, index) => {
          // let total = 0;
          // let percentage = 0;
          // if (index == royaltiesDistribution.length - 1) {
          //   total =
          //     royaltiesDistribution
          //       .map((wallet) => Number(wallet.totalBetAmount))
          //       .reduce((a, b) => Number(a) + Number(b), 0) +
          //     Number(percentage);
          //   percentage = total / 100;
          // }

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
                          Wallet: 0x...{wallet.address?.slice(28)}
                        </p>
                        <p className='truncate text-sm text-gray-200'>
                          Invest: {wallet.totalBetAmount}
                        </p>
                        <p className='truncate text-sm text-gray-200'>
                          Rewards : {wallet.totalReWards}
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
