class Api::MemosController < ApplicationController
    def index
        render json: Memo.all
    end
    
    def create
        memo = Memo.new(memo_params)
        if memo.save
        render json: memo
        else
        render json: memo.errors, status: 422
        end
    end
    
    def update
        memo = Memo.find(params[:id])
        if memo.update(memo_params)
        render json: memo
        else
        render json: memo.errors, status: 422
        end
    end
    
    def destroy
        memo = Memo.find(params[:id])
        memo.destroy!
        render json: memo
    end
    
    private
    
    def memo_params
        params.require(:memo).permit(:title, :content)
    end
end
