"use client";

export default function TotalCart(props) {
    const { className, items=[], total } = props;

    Object.keys(props).forEach( key => {
        if( key !== 'total' && key !== 'className' && key !== 'items') {
          if( items.findIndex( item => item.label === key ) === -1 ) {
            items.push({
              label: key,
              value: parseFloat(props[key]).toFixed(2)
            });
          }
        }
    } );

    return <dl className={ className ? className : "mt-10 space-y-6 text-sm font-medium text-gray-500"}>
            {items.map( item => <div className="flex justify-between" key={item.label}>
              <dt>{item.label}</dt>
              <dd className={ item.className ? item.className : "text-gray-900"}>${item.value}</dd>
            </div>)}
            <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
              <dt className="text-base">Total</dt>
              <dd className="text-base">${total}</dd>
            </div>
          </dl>
}