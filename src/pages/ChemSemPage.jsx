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
    "Chemistry",
    "https://drive.google.com/file/d/1f20wuRSkk_rDCIN0KszFt9vACo-XNh2A/view",
    "https://drive.google.com/file/d/1IVnvATkzwZ1UhWkj41X3KWraGsimaWch/view",
  ),
  createData(
    "Electronics and Communitication ",
    "https://drive.google.com/file/d/1f0rFMKsETRc5U4MCp6XTF2DLwd3FpibI/view",
    "",
    "https://drive.google.com/drive/folders/1EMlARKXZDa0q9OUxQ6mFylhb16HgpmS2",
  ),
  createData(
    "Mathematics ",
    "https://drive.google.com/file/d/1f8MfOIOt-Y3FfUO_PdKUZmzffJZW0L1z/view",
    "https://drive.google.com/file/d/1SKPt0hNPcJZiLnJvQWzLmArPjAd7nNUy/view",
    "https://drive.google.com/drive/folders/1hRXxSGxxAZ_WlrobgcuNkfeTq5VQvMge",
  ),
  createData(
    "Technical English",
    "https://drive.google.com/file/d/1fE2uJem9FeDT_OL0GLhcPtiM71S41uc-/view",
    "",
    "https://drive.google.com/drive/folders/1hRXxSGxxAZ_WlrobgcuNkfeTq5VQvMge",
  ),
  createData(
    "Introduction to programming",
    "https://drive.google.com/file/d/1esxmo-WYHOHK30Dr7JEVOkglUS_lGZWg/view",
    "https://drive.google.com/file/d/15KRyMCRI2gOK1bfNjoj1w15o8Rj7Sqwx/view",
    "https://drive.google.com/drive/folders/1FniSyHSKajNQkPnetkJgTBbbUgyw64GF",
  ),
];

export default function ChemSemPage() {
  return (
    <Layout>
      <TableContainer className="ChemSemPage bg-[#161A30] w-full  pt-[50px] pb-0  ">
        <Table
          className="bg-[#161A30] text-[cyan] text-[100px]  h-[500px]"
          aria-label="caption table"
        >
          <TableBody>
            {rows.map((row) => (
              <TableRow className="space-y-12" key={row.name}>
                <TableCell component="th" scope="row">
                  <h1 className="text-[29px]  max-lg:text-[15px] text-[#EDB7ED]">{row.name}</h1>
                </TableCell>
                <TableCell align="right">
                  <h1 className=" text-[17px] max-lg:text-[12px]">
                    <a href={row.Subjects} className="href text-sm">
                      <button className="button-64" role="button">
                        <span className="text">PYQS</span>
                      </button>
                    </a>
                  </h1>
                </TableCell>
                <TableCell align="right">
                  <a href={row.Books} className="href text-sm max-lg:text-[12px] ">
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
