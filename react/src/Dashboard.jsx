import { useState } from 'react';

function Dashboard() {
  return (
    <div>
      <h1>AlgoTreasure</h1>

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>Divide et Impera</h2>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
             <th>Algorithm</th>
             <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binary Search</td>
              <td>Searches for a specific element in a sorted array by repeatedly dividing the search space in half.</td>
            </tr>
            <tr>
              <td>Merge Sort</td>
              <td>Divides the unsorted array into two halves, recursively sorts them, and then merges the two sorted halves.</td>
            </tr>
            <tr>
              <td>Quick Sort</td>
              <td>Divides the array into two sub-arrays based on a pivot element, recursively sorts them, and combines the sorted sub-arrays.</td>
            </tr>
          </tbody>
        </table>
      </div>

     <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Backtracking</h2>
      <table style={{ margin: '0 auto' }}>
        <thead>
          <tr>
          <th>Algorithm</th>
          <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>N-Queens Problem</td>
            <td>Finds all possible placements of N queens on an NxN chessboard without any two queens threatening each other.</td>
          </tr>
          <tr>
            <td>Sudoku Solver</td>
            <td>Solves a Sudoku puzzle by assigning values to empty cells in a way that every row, column, and subgrid contains all digits from 1 to 9.</td>
          </tr>
          <tr>
            <td>Hamiltonian Cycle</td>
            <td>Finds a Hamiltonian cycle, which is a path in a graph that visits each vertex exactly once and returns to the starting vertex.</td>
          </tr>
        </tbody>
        </table>
     </div>


      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>Dynamic Programming</h2>
          <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fibonacci Sequence</td>
              <td>Computes the nth number in the Fibonacci sequence using dynamic programming to avoid redundant calculations.</td>
            </tr>
            <tr>
              <td>Knapsack Problem</td>
              <td>Finds the most valuable combination of items to include in a knapsack without exceeding its weight capacity.</td>
            </tr>
            <tr>
              <td>Longest Common Subsequence</td>
              <td>Finds the longest subsequence that is common to two or more given sequences using dynamic programming.</td>
            </tr>
          </tbody>
        </table>
        </div>

    </div>
  );
}

export default Dashboard;
