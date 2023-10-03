import css from '../css/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
     return <section class={css.statistics}>
          {title && (<h2 class={css.title}>{ title }</h2>) }
          
          <ul class={css["stat-list"]}>
               {stats.map(stat => {
                    return <li key={stat.id} class={css.item}>
                         <span class={css.label}>{stat.label}</span>
                         <span class={css.percentage}>{ stat.percentage }</span>
                    </li>
               })}
          </ul>
     </section>
}