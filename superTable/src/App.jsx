import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// import { useState } from 'react'

function App() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [age, setAge] = useState("");

  // const inputChangeHandler = (e) => {
  //   setName(e.target.name)
  //   setGender(e.target.gender)
  //   setAge(e.target.age)
  // }
  return (
    <>
      <div className="fieldsContainer">
        <Input
          type="text"
          placeholder="enter your name"
          // value
          className="input"
          // onChange = {inputChangeHandler}
        />
        <Input
          type="text"
          placeholder="your gender"
          // value
          className="input"
          // onChange = {inputChangeHandler}
        />
        <Input
          type="number"
          placeholder="your age"
          // value
          className="input"
          // onChange = {inputChangeHandler}
        />
        <Button className="button" >ADD</Button>
      </div>
      <div className="searchTableContainer">
        <div>
          <Input
            type="name"
            placeholder="search by name"
            className="input"
          />
        </div>
        <div>
          <Table>
            <TableCaption>LIST OF USERS</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">NAME</TableHead>
                <TableHead>AGE</TableHead>
                <TableHead>GENDER</TableHead>
                <TableHead className="text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>
    </>
  )
}

export default App
