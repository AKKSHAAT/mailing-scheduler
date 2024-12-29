import {NextResponse } from 'next/server';
import { mailingTemplates } from '@/app/db';


export async function GET() {
    return NextResponse.json({mailingTemplates });
  }
  
  