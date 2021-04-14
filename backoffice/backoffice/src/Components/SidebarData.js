import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri';
import { AiFillPushpin, AiFillBank, AiOutlineUser, FaUtensilSpoon } from "react-icons/ai";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";


export const SidebarData = [
    {
        title: 'Página Principal',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Cozido',
        path: '/cozido',
        icon: <BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Confraria',
        path: '/confraria',
        icon: <AiFillBank />,
        cName: 'nav-text'
    },
    {
        title: 'Domingos R.',
        path: '/domingosr',
        icon: <AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Restaurantes',
        
        icon: <GiForkKnifeSpoon />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
              title: 'Registar',
              path: '/restaurantes/registar',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Editar',
              path: '/restaurantes/editar',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Ativar / Desativar',
              path: '/restaurantes/estado',
              icon: <IoIcons.IoIosPaper />
            },
            {
              title: 'Recomendar',
              path: '/restaurantes/recomendar',
              icon: <IoIcons.IoIosPaper />
            }
          ]
    },
    {
        title: 'Regiões',
  
        icon: <FaMapMarkerAlt />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
          {
            title: 'Registar',
            path: '/regioes/registar',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Editar',
            path: '/regioes/editar',
            icon: <IoIcons.IoIosPaper />
          }
        ]
    },
]