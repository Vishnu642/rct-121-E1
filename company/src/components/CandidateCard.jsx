import styles from "./CandidateCard.module.css";

function CandidateCard({name,avatar,title,salary,company_name,id}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" src={avatar} width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>{title} {company_name}</div>
      </div>
      <div>$ {salary}</div>
    </div>
  );
}

export default CandidateCard;

// "name":"Christine",
//     "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
//     "rating":17659,
//     "title":"Corporate",
//     "salary":66042,
//     "company_name":"O'Conner, Fisher and Shanahan",
//     "id":"1"
