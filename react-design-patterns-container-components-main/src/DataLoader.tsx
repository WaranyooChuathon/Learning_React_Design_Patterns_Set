import React, { useState, useEffect } from "react";
import type {ReactElement} from 'react';

type User = {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
};

interface DataLoaderProps<T> {
  children: ReactElement<{ [key: string]: T }> | ReactElement<{ [key: string]: T }>[];
  resourceName: string;
  getDataFn?: () => Promise<T>;
}

export const DataLoader = <T,>({
  children,
  getDataFn = async () => {
    throw new Error("getDataFn not provided");
  },
  resourceName,
}: DataLoaderProps<T>) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getDataFn();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [getDataFn]);

  return (
    <>
      {data &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, { [resourceName]: data })
        )}
    </>
  );
};
