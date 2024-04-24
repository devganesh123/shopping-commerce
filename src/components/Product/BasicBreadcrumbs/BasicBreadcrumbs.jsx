import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({
  productCategoryName,
  productTitle,
}) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "2rem" }}>
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Link to={`/${productCategoryName}`}>{productCategoryName}</Link>
        <Typography color="text.primary">{productTitle}</Typography>
      </Breadcrumbs>
    </div>
  );
}
