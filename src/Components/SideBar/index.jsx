import { Link, useNavigate, useParams} from 'react-router-dom';

import PublicAWS from '../../api/S3/PublicAcess.json';
import {Side, HeaderSide} from './style';
import { Menu } from 'antd';

// Icons
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {MdMapsHomeWork, MdOutlinePrecisionManufacturing} from 'react-icons/md';
import {BiPackage} from 'react-icons/bi';
import {FaDropbox} from 'react-icons/fa';
import { useEffect } from 'react';

const { SubMenu } = Menu;

function SideBar() {
    let navigate = useNavigate();
    function handleClick(e){
        navigate(e.key);
      };
    
    return(
        <Side>
           <HeaderSide>
               <div>
                   <img src={PublicAWS.URL+'logo-echo.png'} className='img-side' />
                   <h4>ECHO</h4>
               </div>
               <hr></hr>
           </HeaderSide>
           <div className='overflow-container'>
               <Menu
                onClick={handleClick}
                style={{ width: '100%' }}
                defaultSelectedKeys={[window.location.pathname]}
                defaultOpenKeys={['']}
                mode="inline" >
                    <Menu.Item key="/" icon={<MdMapsHomeWork />}>
                        Inicio
                        </Menu.Item>
                <SubMenu key="sub1" icon={<MdOutlinePrecisionManufacturing />} title="Produção">
                <Menu.ItemGroup key="g1" title="Pacote">
                    <Menu.Item key="/Pedidos" icon={<BiPackage />}>Pedidos</Menu.Item>
                    <Menu.Item key="/Estoque" icon={<FaDropbox />}>Estoque</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Maquina Laser">
                    <Menu.Item key="/Cortes">Cortes</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Configurações">
                <Menu.Item key="9">Ajustar Preço</Menu.Item>
                <Menu.Item key="10">Limitar Tempos</Menu.Item>
                <Menu.Item key="11">Analitycs</Menu.Item>
                <Menu.Item key="12">Admin</Menu.Item>
                </SubMenu>
            </Menu>
        
           </div>
        </Side>   
    )
}
export default SideBar