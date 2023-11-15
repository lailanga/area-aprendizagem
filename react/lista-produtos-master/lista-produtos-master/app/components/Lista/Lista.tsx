// material de estudo
// https://react.dev/learn/updating-arrays-in-state#adding-to-an-array

import { useState } from 'react';
import Input from '../Formulario/Input';
import customData from '../../../_data/produtos/produtos.json';
import Itens from './Itens';
import { v4 as uuidv4 } from 'uuid';

export default function Lista(){

    const [list, setList] = useState(customData);
    const [name, setName] = useState('');

    const [busca, setBusca] = useState('');
    const filterdProd = list.filter(iten => iten.category.toLowerCase() == busca.toLowerCase());

    return (
        <div>
            <div>
                <label htmlFor='busca'>Busque por categoria: </label>
                <Input 
                    tag='busca'
                    type='text' 
                    placeholder='o que procuras?' 
                    value={busca}
                    onChange={(e:any) => setBusca(e.target.value)} //irá capturar do input do form o valor que foi digitado. target é uma referência ao objeto que enviou o evento
                /> 
                <div>
                    <ul>
                        {busca
                            ? filterdProd.map( (i) => <Itens key={i.id} {...i} >  
                                    <button 
                                        type='button'
                                        onClick={() => { 
                                            setList(
                                                list.filter(a=>a.id != i.id)
                                            );
                                        }}
                                    > 
                                        deletar 
                                    </button>
                            </Itens>)
                            : list.map( (i) => <Itens key={i.id} {...i} > 
                                <button 
                                        type='button'
                                        onClick={() => { 
                                            setList(
                                                list.filter(a=>a.id != i.id)
                                            );
                                        }}
                                    > 
                                        deletar 
                                </button>
                            </Itens>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <label htmlFor='add'>Inserir novo produto </label>
                <Input 
                    tag='add'
                    type='text'
                    value={name}
                    onChange={(e:any) => setName(e.target.value)}
                />
                <button 
                    type='button' 
                    onClick={() => {
                        setList([
                            ...list,
                            {
                                category: 'teste',
                                id: uuidv4(),
                                price: 2.5,
                                stocked: true,
                                name: name
                            }
                        ]);
                        setName('');
                    }}
                    
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
}

/* 
//import Item from './Item';
const filterdProdut = PRODUCTS.filter(iten => iten.category.toLowerCase() == busca.toLowerCase());
{busca
    ? filterdProdut.map( (i) => <Item key={i.id} {...i} />)
    : PRODUCTS.map( (i) => <Item key={i.id} {...i} />)
}
const PRODUCTS = [
    {id: 1, category: "Fruta", price: '1,00', stocked: true, name: "Maça"},
    {id: 2, category: "Fruta", price: '1,58', stocked: true, name: "Abacaxi"},
    {id: 3, category: "Fruta", price: '2,52', stocked: false, name: "Abacate"},
    {id: 4, category: "Vegetal", price: '2,39', stocked: true, name: "Alface"},
    {id: 5, category: "Vegetal", price: '4,78', stocked: false, name: "Repolho"},
    {id: 6, category: "Vegetal", price: '6,54', stocked: true, name: "Espinafre"}
];

*/

/* 
 //const filterdProdut = PRODUCTS.filter(iten => iten.category.toLowerCase() == busca.toLowerCase());
    //const filterdProdut = PRODUCTS.filter(iten => iten.category == 'Fruits')
{console.log(busca)}
 <ul>
                {PRODUCTS.map( (i) => <Filtro key={i.id}>{i.name}</Filtro>)}
            </ul>
            <div>
                {filterdProdut.map( (i) => <Filtro key={i.id}>{i.name}</Filtro>)}
            </div>
*/

/*
<button 
                    type='button' 
                    onClick={() => {
                        list.push({
                            category: 'teste',
                            id: nextId++,
                            price: 2.5,
                            stocked: true,
                            name: name
                        });
                    }}
                >
                    Adicionar
                </button>
*/