import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

type DispatchFunction = () => AppDispatch;

export const useAddToCart: DispatchFunction = useDispatch;
