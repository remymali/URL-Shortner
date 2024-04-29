import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-center text-white text-base'>
        Copyright &#169 Url-Shortner| Remy. M. Ali
    </div>
  )
};

export default Footer;
