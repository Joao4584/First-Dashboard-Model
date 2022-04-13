import React, { useEffect, useState } from "react";
import { Spin } from 'antd';

import {Container} from './style'
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export function LoadingPage({children}){
    const [loadingPage, setLoadingPage] = useState(true);
    useEffect(()=> {
      setTimeout(() => {
        setLoadingPage(false);
      }, 500);
      
    }, [])

    return(
      <Container>
        <Spin className="spin-box" spinning={loadingPage} indicator={antIcon}>
          {children}
        </Spin>
      </Container>
      
    )


}