import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import GetCreditScore from '../Api';

const CreditScore = () => {

    const [creditScores, setCreditScore] = useState([]);

    const loadCreditScores = useCallback(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        axios.get(`${proxyurl}https://rose-credit-card-api.herokuapp.com/creditCard`)
        .then(response => {
            console.log(response.data);
            setCreditScore(response.data);
        }).catch(error => {
            alert('Something went wrong :(');
        })
    }, []);

    useEffect(() => {
        loadCreditScores();
    }, [loadCreditScores]);

    // Table Body
    const TableBody = (props) => {
        const rows = props.creditScores.map(creditScore => {
            return (
                <tr key={creditScore.id}>
                <td>{creditScore.name}</td>
                <td>{creditScore.interest}</td>
                <td>{creditScore.balance}</td>
                <td>{creditScore.annualInterestRate}</td>
                <td>{creditScore.monthlyPaymentRate}</td>
                <td>{creditScore.age}</td>
                <td>{creditScore.delinquency}</td>
                <td>{creditScore.debtRatio}</td>
                <td>{creditScore.numberOfOpenCreditLinesAndLoans}</td>
                <td>{creditScore.numberOfTime30To59DaysPastDueNotWorse}</td>
                <td>{creditScore.numberOfTime90DaysLate}</td>
                <td>{creditScore.numberOfRealEstateLoanAndLines}</td>
                <td>{creditScore.numberOfTime60To89DaysPastDueNotWorse}</td>
                <td>{creditScore.numberOfDependants}</td>
                </tr>
            );
        });

        return rows;
    }

    // GetCreditScore();
    return (
        <div className="credits-container">
            <h2>Credit scores</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <td>Name</td>
                    <td>Interest</td>
                    <td>Balance</td>
                    <td>Annual Interest Rate</td>
                    <td>Monthly Payment Rate</td>
                    <td>Age</td>
                    <td>Delinquency</td>
                    <td>Debt Ratio</td>
                    <td>Number Of Open Credit Lines And Loans</td>
                    <td>Number Of Time 30 To 59 Days Past Due Not Worse</td>
                    <td>Number Of Time 90 Days Late</td>
                    <td>Number Of Real Estate Loan And Lines</td>
                    <td>Number Of Time 60 To 89 Days Past Due Not Worse</td>
                    <td>Number Of Dependants</td>
                    </tr>
                </thead>
                <tbody>
                    <TableBody creditScores={creditScores}/>
                </tbody>
            </Table>
        </div>
    );
}

export default CreditScore;