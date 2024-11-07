import { NextResponse } from 'next/server';
import {getAllToppingDB} from '@/app/actions';

export async function GET() {
  try {
    const {topping} = await getAllToppingDB();
    return NextResponse.json({ message: 'Ok', topping });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener el topping', error });
  }
}
