import { UserOutlined, UserSwitchOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import React from "react";
export function DropDownFile({}) {
  return <div className='grid from-gray-700  to-gray-900 rounded p-2 capitalize ml-4  cursor-pointer text-md pl-6 text-sm space-y-4'>
                                        <span className='flex space-x-2 hover:scale-110'><UserSwitchOutlined /><a href='#'>role</a></span>
                                        <span className='flex space-x-2 hover:scale-110'><UserOutlined /><a href='#'>user</a></span>
                                        <span className='flex space-x-2 hover:scale-110'><UsergroupAddOutlined /><a href='#'>team</a></span>
                          </div>;
}
  