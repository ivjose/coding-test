import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import { clearToken } from 'utils/auth';

import { fetchDevice, notify } from './helper';

import './Devices.styles.css';

const Devices = ({ setIsLogin }) => {
  const [data, setdata] = useState([]);
  const circleCount = [...Array(data.length).keys()];
  const space = 360 / data.length;

  const getDevice = async () => {
    try {
      const response = await fetchDevice();

      setdata([...response.devices]);
    } catch (error) {}
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDevice();
    }, 5000);

    getDevice();
    return () => clearInterval(interval);
  }, []);

  const handleNotify = async () => {
    const value = {
      name: 'Jose Santos IV',
      email: 'ivjosesantos@gmail.com',
      repoUrl: 'https://github.com/ivjose/coding-test',
      message: `Hi, I hope you're doing well and stay safe`,
    };

    try {
      await notify(value);
      alert('Successfuly notify!');
    } catch (error) {
      alert('Error, Ops Something went wrong!');
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    clearToken();
  };

  return (
    <div className="devices-page">
      <div className="devices-content">
        <div className="color-circle-wrapper">
          <div className="devices-inner">
            <h1 className="devices-count">{circleCount.length}</h1>
            <p className="devices-text">
              DEVICES
              <br />
              ONLINE
            </p>
          </div>
          {circleCount.map((count) => {
            const mySpace = count * space;

            return (
              <div
                key={count}
                className="cricle-wrap"
                style={{ transform: `rotate(${mySpace - 30}deg)` }}
              >
                <div className="cricle"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="devices-btn-group">
        <Button text="NOTIFY" color="light" onClick={handleNotify} />
        <Button text="LOG OUT" color="dark" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Devices;
