import css from '../css/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
     return <section className={css.statistics}>
          {title && (<h2 className={css.title}>{ title }</h2>) }
          
          <ul className={css["stat-list"]}>
               {stats.map(stat => {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    return <li key={stat.id} className={css.item} style={{
                         backgroundColor: `#${randomColor}`
                    }}>
                         <span className={css.label}>{stat.label}</span>
                         <span className={css.percentage}>{ stat.percentage }%</span>
                    </li>
               })}
          </ul>
     </section>
}