import React from 'react';
import GridItem from './GridItem';
import { FaUserFriends, FaStore, FaChartBar, FaGlobe, FaQrcode, FaPlug } from 'react-icons/fa';

const items = [
  {
    Icon: FaUserFriends,
    title: 'Cresça em todas as plataformas',
    description: 'Dê aos seus seguidores acesso fácil a todo o seu conteúdo em um único link. Tudo a um toque de distância!'
  },
  {
    Icon: FaStore,
    title: 'Venda e monetize sua audiência',
    description: 'Venda produtos, receba pagamentos e inclua links de apoio para que sua audiência possa contribuir.'
  },
  {
    Icon: FaChartBar,
    title: 'Analytics detalhado',
    description: 'Use análises poderosas para entender o que sua audiência mais engaja e crescer seu negócio.'
  },
  {
    Icon: FaGlobe,
    title: 'Mini-site personalizado em segundos',
    description: 'Crie sua página em segundos e customize de forma que reflita sua marca e estilo único.'
  },
  {
    Icon: FaQrcode,
    title: 'Conecte o offline ao online',
    description: 'Crie QR codes para embalagens, pôsteres e flyers que levam direto para seu conteúdo online.'
  },
  {
    Icon: FaPlug,
    title: 'Integre com suas ferramentas',
    description: 'Conecte-se a Mailchimp, Vimeo, Zapier, Amazon, YouTube, Google Analytics e muito mais!'
  },
];

const GridContainer = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {items.map((item, index) => (
        <GridItem
          key={index}
          Icon={item.Icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default GridContainer;
