import React from 'react'
import CeramicsCategoryPage from '../category/Ceramics/page'
import PlantPotsCategoryPage from '../category/Plantpots/page'
import TablewareCategoryPage from '../category/Tableware/page'
import TableCategoryPage from '../category/Tables/page'
import CutleryCategoryPage from '../category/Cutlery/page'
import ChairsCategoryPage from '../category/Chairs/page'

const page = () => {
  return (
    <div className="px-4 mt-0 md:px-8 py-12 font-[Clash Display]">
      {/* All Products Heading */}
      <h1 className="text-2xl font-semibold mb-8 text-center text-[#2A254B]">All Products</h1>
      
      {/* Category Components */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
        <ChairsCategoryPage />
        </div>
        <div className="flex flex-col items-center">
        <CeramicsCategoryPage /> 
        </div>
        <div className="flex flex-col items-center">
        <PlantPotsCategoryPage />
        </div>
        <div className="flex flex-col items-center">
        <TableCategoryPage />
        </div>
        <div className="flex flex-col items-center">
          <TablewareCategoryPage />
        </div>
        <div className="flex flex-col items-center">
          <CutleryCategoryPage />
        </div>
      </div>
    </div>
  )
}

export default page;
