import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/components/SvgIcon';
import userActions from '../../../user/actions/userAction';

const TopNavigation = ({ history }) => {
  const dispatch = useDispatch();

  const logout = () => dispatch(userActions.logout(history));

  return (
    <nav className="top">
      <div className="menu">
        <div className="item">
          <button className="link">
            Documents
          </button>
        </div>
        <div className="item">
          <div className="group">
            <button className="link flex items-center">
              Multi Menu
              <SvgIcon
                name="arrow"
                classes="w-4 h-4 mt-1 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              />
            </button>
            <ul className="multi-menu scale-0 group-hover:scale-100 transform transition duration-150 ease-in-out">
              <li className="multi-menu-item">
                <div className="multi-menu-icon">
                  <SvgIcon name="cog" classes="w-6 h-6" />
                </div>
                <div className="multi-menu-text">
                  <p className="font-semibold">Appearance</p>
                  <p className="text-sm">Easy customization</p>
                </div>
              </li>
              <li className="multi-menu-item">
                <div className="multi-menu-icon">
                  <SvgIcon name="cog" classes="w-6 h-6" />
                </div>
                <div className="multi-menu-text">
                  <p className="font-semibold">Settings</p>
                  <p className="text-sm">Update your settings</p>
                </div>
              </li>
              <li className="multi-menu-item">
                <div className="multi-menu-icon">
                  <SvgIcon name="cog" classes="w-6 h-6" />
                </div>
                <div className="multi-menu-text">
                  <p className="font-semibold">Item 1</p>
                  <p className="text-sm">This is your item 1</p>
                </div>
              </li>

              <li className="multi-menu-item">
                <div className="multi-menu-icon">
                  <SvgIcon name="cog" classes="w-6 h-6" />
                </div>
                <div className="multi-menu-text">
                  <p className="font-semibold">Item 2</p>
                  <p className="text-sm">Take a look at your item</p>
                </div>
              </li>

              <li className="multi-sub-menu">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">Sub menu</span>
                  <span className="mr-auto">
                    <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                  </span>
                </button>
                <ul className="sub-menu">
                  <li className="px-3 py-1 hover:bg-gray-100">
                    <button className="sub-menu-button">Submenu Link #5</button>
                  </li>
                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">
                        <span className="sub-menu-button">Submenu Link #6</span>
                      </span>
                      <span className="mr-auto">
                        <SvgIcon name="arrow" classes="w-4 h-4 transition duration-150 ease-in-out" />
                      </span>
                    </button>
                    <ul className="sub-menu">
                      <li className="px-3 py-1 hover:bg-gray-100">
                        <button className="sub-menu-button">Submenu Link #1</button>
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        <button className="sub-menu-button">Submenu Link #2</button>
                      </li>
                    </ul>
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100">
                    <button className="sub-menu-button">Submenu Link #3</button>
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100">
                    <button className="sub-menu-button">Submenu Link #4</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <button className="link">
            My Profile
          </button>
        </div>
        <div className="item">
          <button className="link">
            Settings
          </button>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex w-full justify-end items-center pr-4">
          <div className="flex relative rounded-full items-center">
            <div className="group inline-block">
              <button
                id="logout-button"
                className="flex rounded-full p-2 focus:outline-none"
                onClick={logout}
                title="Logout">
                <SvgIcon
                  name="power-off"
                  viewBox="0 0 512.101 512.101"
                  classes="w-8 h-8 fill-current text-pink-600 transition duration-500 ease-in-out transform hover:rotate-360"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

TopNavigation.propTypes = {
  history: PropTypes.object
};

export default TopNavigation;
