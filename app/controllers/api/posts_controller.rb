class Api::PostsController < ApplicationController

  def index
    params[:sort_column] ||= 'title'
    params[:sort_order] ||= 'asc'
    render json: Post.all.order("#{params[:sort_column]} #{params[:sort_order]}")
  end

  def show
    render json: Post.find(params[:id])
  end

  def create
    @post = Post.new(permitted_post_params)
    if @post.save
      render json: @post
    else
      render :json => { :errors => @post.errors.full_messages }, :status => 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(permitted_post_params)
      render json: @post
    else
      render :json => { :errors => @post.errors.full_messages }, :status => 422
    end
  end

  def destroy
  end

  protected

  def permitted_post_params
    params.require(:post).permit(:title, :body, :category)
  end

end
