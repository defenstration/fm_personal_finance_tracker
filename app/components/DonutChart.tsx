'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import LeftBar from './LeftBar'


interface BudgetItem {
    category: string
    amount: number
    color: string
}

interface DonutChartProps {
    data: BudgetItem[]
    totalBudget: number
    currentSpend: number
}

const DonutChart: React.FC<DonutChartProps> = ({ data, totalBudget, currentSpend }) => {
    const ref = useRef<SVGSVGElement>(null)

    useEffect(() => {
        const width = 200
        const height = 200
        const radius = Math.min(width, height) / 2

        const svg = d3.select(ref.current)
        .attr('width', width)
        .attr('height', height)

        const group = svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

        const arc = d3.arc<d3.PieArcDatum<BudgetItem>>()
        .innerRadius(radius - 40)
        .outerRadius(radius)

        const pie = d3.pie<BudgetItem>()
        .value((d) => d.amount)
        .sort(null)

        group.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d) => d.data.color)

        group.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.35em')
        .style('font-size', '28px')
        .style('font-weight', 'bold')
        .text(`$${currentSpend}`)
        
        group.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '1.2em')
        .style('font-size', '14px')
        .style('fill', '#666')
        .text(`of $${totalBudget} limit`)

    }, [data, totalBudget, currentSpend])

    return (
        <div className='flex items-center space-x-6'>
            <svg ref={ref} />
            <div className='space-y-2'>
                {data.map((item) => (
                    <div key={item.category}>
                        <LeftBar borderColor={`bg-[${item.color}]`}>
                                <span>{item.category}</span>
                                <span>${item.amount}</span>
                        </LeftBar>
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default DonutChart
