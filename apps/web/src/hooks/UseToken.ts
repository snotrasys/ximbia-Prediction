import { useMemo, useContext, useState } from 'react';
import { abi, abiPre, BUSD, } from './abiHelpers';

import { BigNumber, Contract, ethers } from 'ethers';
import { getContract } from 'utils/contractHelpers';
import useActiveWeb3React from './useActiveWeb3React';
import contracts from 'config/constants/contracts';

export const useToken = (address_) => {
  const { account, chainId, connector } = useActiveWeb3React()

  const contract = async () => {
    //@ts-ignore
    // const contract = getContract(address_, abiPre);
    // return contract;    
    if (!window.ethereum) return null;
    //@ts-ignore
    const provider =new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new Contract(contracts.predictionsCAKE[56], abiPre, signer);
    return contract;
  };

  const getAllUser = async () => {
    console.log(account, address_, chainId, connector);
    if(account == null) return []
    
    // if (!isLoaded) return BigNumber.from(0);
    const contract_ = await contract();
    // const address = address_ == undefined ? accounts : address_;
    const balance = await contract_.getAllUsers();
    return balance;
  };  
  return useMemo(() => {
    try {
      return [
        {
          contract,
          getAllUser,
          
          address_
        },
      ];
    } catch (e) {
      console.log(e);
      return [    {contract,
        getAllUser,        
        address_}];
    }
  }, [account, chainId, connector ]);
};
