# table-to-json-converter
Online tool to convert html table code data to json object

Example:
Output of the code
```
<table>
  <thead>
<tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</tbody>
</table>
```
 should be
 
[{"Company":"Alfreds Futterkiste","Contact":"Maria Anders","Country":"Germany"},{"Company":"Centro comercial Moctezuma","Contact":"Francisco Chang","Country":"Mexico"},{"Company":"Ernst Handel","Contact":"Roland Mendel","Country":"Austria"},{"Company":"Island Trading","Contact":"Helen Bennett","Country":"UK"},{"Company":"Laughing Bacchus Winecellars","Contact":"Yoshi Tannamuri","Country":"Canada"},{"Company":"Magazzini Alimentari Riuniti","Contact":"Giovanni Rovelli","Country":"Italy"}]

## Requires the usage of <thead> and <tbody> elements'``
