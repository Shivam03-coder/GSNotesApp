import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Layout from "../components/layout/Layout";

function createData(name, Subjects, Books, notes) {
  return { name, Subjects, Books, notes };
}

const rows = [
  createData(
    "FCAM",
    "https://drive.google.com/file/d/1ft97JHwrr3pwGIzK_g5HJ3ur3zQnPiSC/view",
    "https://drive.google.com/file/d/1WWQxWxHdmO_-jT83SYp9CZH-SudYlzbl/view",
  ),
  createData(
    "Applied Physics ",
    "https://drive.google.com/file/d/1f_X5UsIukWZG9rm31npu7TrpWAvwUTEi/view",
    "https://drive.google.com/file/d/1QgC7pVpu5GLUeqmTsDZj0wuB0nG6S8Su/view",
    "https://drive.google.com/file/d/19pujK1rFfBrSX0FklIAK1aRujsTScUBe/view",
  ),
  createData(
    "Engineering Drawing ",
    "https://drive.google.com/file/d/19_m9OyZCHGyfZeYfVjNH0-ZBRmUUOhqx/view",
    "https://drive.google.com/file/d/1TKj3fDxNhkD1ETLgD3njlkVLkCa9Dtwx/view",
  ),
  createData(
    "Mathematics",
    "https://drive.google.com/file/d/1GOFZW1lwnHEaD3wI3jeh-M42EzAbdnA3/view",
    "https://drive.google.com/file/d/1SKPt0hNPcJZiLnJvQWzLmArPjAd7nNUy/view",
    "https://drive.google.com/drive/folders/1hRXxSGxxAZ_WlrobgcuNkfeTq5VQvMge",
  ),
  createData(
    "Electrical Engineering",
    "https://drive.google.com/file/d/1fFWlihcTy4wK1akKgzsN5rG2gWQtASu1/view",
    "https://drive.google.com/file/d/1ikRMabF2N06WknZ1Xr5yy7yRza89mIvD/view",
    "https://drive.google.com/drive/u/0/folders/1Eb9bHB8pzCDvNgomf7IEzQ8XHQgpHVMA",
  ),
];

export default function PhysSemPage() {
  return (
    <Layout>
      <TableContainer className="PhysSemPage bg-[#161A30] w-full  pt-[50px] pb-0  ">
        <Table
          className="bg-[#161A30] text-[cyan] text-[100px]  h-[500px]"
          aria-label="caption table"
        >
          <TableBody>
            {rows.map((row) => (
              <TableRow className="space-y-12 w-full" key={row.name}>
                <TableCell component="th" scope="row">
                  <h1 className="text-[29px] max-lg:text-[20px] text-[#EDB7ED]">{row.name}</h1>
                </TableCell>
                <TableCell align="right">
                  <h1 className=" text-[17px] max-lg:text-[13px] ">
                    <a href={row.Subjects} className="href text-sm">
                      <button className="button-64" role="button">
                        <span className="text">PYQS</span>
                      </button>
                    </a>
                  </h1>
                </TableCell>
                <TableCell align="right">
                  <a href={row.Books} className="href text-sm ">
                    <button className="button-64" role="button">
                      <span className="text">BOOKS</span>
                    </button>
                  </a>
                </TableCell>

                <TableCell align="right">
                  <a href={row.notes} className="href text-sm ">
                    <button className="button-64" role="button">
                      <span className="text">NOTES</span>
                    </button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
