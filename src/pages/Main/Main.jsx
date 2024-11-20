import React, { useState, useContext } from 'react';
import Home from '../Home/Home';
import Category from '../../components/Category/Category';
import TabMenu from '../../components/TabMenu/TabMenu';
import { ShopContext } from '../../Context/Context';
import Item from '../../components/Item/Item';

const Main = () => {
  const [tab, setTab] = useState("All");
  const { all_product } = useContext(ShopContext);

  const filteredProducts = tab === "All" ? all_product : all_product.filter(product => product.category === tab);

  return (
    <main className='main'>
      <Home />
      <Category />
      <section className="products section container">
        <TabMenu tab={tab} setTab={setTab} />
        <Item tab={tab} products={filteredProducts} />
      </section>
    </main>
  );
}

export default Main;
